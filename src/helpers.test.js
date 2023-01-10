import { recursiveFlattenToAppURL, recursiveremoveKey } from './helpers';

describe('recursiveFlattenToAppURL tests', () => {
  it('recursiveFlattenToAppURL', () => {
    const obj = {
      '@id': 'http://localhost:8080/Plone/my-page',
      blocks: {
        'UUID-1': {
          '@type': '__grid',
          blocks: {
            'Inner-UUID-1': {
              '@id': 'http://localhost:8080/Plone/my-inner-teaser-page',
              '@type': 'teaser',
              url: 'http://localhost:8080/Plone/my-image',
            },
          },
        },
      },
    };
    expect(recursiveFlattenToAppURL(obj)).toEqual({
      '@id': '/my-page',
      blocks: {
        'UUID-1': {
          '@type': '__grid',
          blocks: {
            'Inner-UUID-1': {
              '@id': '/my-inner-teaser-page',
              '@type': 'teaser',
              url: '/my-image',
            },
          },
        },
      },
    });
  });

  it('recursiveremoveKey', () => {
    const obj = {
      '@id': 'http://localhost:8080/Plone/my-page',
      blocks: {
        'UUID-1': {
          '@type': '__grid',
          blocks: {
            'Inner-UUID-1': {
              '@id': 'http://localhost:8080/Plone/my-inner-teaser-page',
              '@type': 'image',
              image_scales: {
                scales: {
                  little: {},
                  small: {},
                  great: {},
                },
              },
            },
          },
        },
      },
    };
    expect(recursiveremoveKey(obj, 'image_scales')).toEqual({
      '@id': 'http://localhost:8080/Plone/my-page',
      blocks: {
        'UUID-1': {
          '@type': '__grid',
          blocks: {
            'Inner-UUID-1': {
              '@id': 'http://localhost:8080/Plone/my-inner-teaser-page',
              '@type': 'image',
            },
          },
        },
      },
    });
  });
});
