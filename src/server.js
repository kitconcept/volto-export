/* eslint no-console: 0 */
import express from 'express';
import { fromPairs, isEmpty, map } from 'lodash';
import { getContent } from '@plone/volto/actions';
import { recursiveFlattenToAppURL, recursiveremoveKey } from './helpers';

function sortByArray(blocks, blocks_layout) {
  return fromPairs(map(blocks_layout.items, (key) => [key, blocks[key]]));
}

function jsonExporter(req, res, next) {
  const { store } = res.locals;
  res.set(
    'Content-Disposition',
    `attachment;filename="${req.path
      .replace('/export', '')
      .replace(/\//g, '.')}.json"`,
  );
  res.set('Content-Type', 'application/json');

  store
    .dispatch(getContent(req.path.replace('/export', '')))
    .then((content) => {
      return new Promise(function (resolve, reject) {
        if (content.blocks) {
          resolve(content);
        } else {
          content.blocks = {};
          content.blocks_layout = [];
          resolve(content);
        }
      });
    })
    .then((content) => {
      return recursiveFlattenToAppURL(content);
    })
    .then((content) => {
      return recursiveremoveKey(content, 'image_scales');
    })
    .then((content) => {
      return new Promise(function (resolve, reject) {
        if (isEmpty(content.blocks)) {
          delete content.blocks;
          delete content.blocks_layout;
          resolve(content);
        } else {
          resolve(content);
        }
      });
    })
    .then((content) => {
      const {
        blocks,
        blocks_layout,
        id,
        title,
        description,
        review_state,
        text,
        subjects,
        show_navigation_portlet,
        preview_image_link,
      } = content;

      res.send(
        JSON.stringify(
          {
            '@type': content['@type'],
            id,
            title,
            description,
            review_state,
            ...(preview_image_link && {
              preview_image_link: preview_image_link['@id'],
            }),
            ...(text && { text }),
            ...(show_navigation_portlet && { show_navigation_portlet }),
            subjects,
            blocks: sortByArray(blocks, blocks_layout),
            blocks_layout,
          },
          null,
          2,
        ),
      );
    })
    .catch((error) => console.log(error));
}

function jsonExporterMiddleware() {
  const middleware = express.Router();

  middleware.all(['**/export', '/export'], jsonExporter);
  middleware.id = 'jsonExport';
  return middleware;
}

export default [jsonExporterMiddleware()];
