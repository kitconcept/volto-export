# volto-export (by kitconcept)

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-export.svg)](https://www.npmjs.com/package/@kitconcept/volto-export)
[![Build Status](https://github.com/kitconcept/volto-export/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-export/actions)
[![Build Status](https://github.com/kitconcept/volto-export/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-export/actions)
[![Build Status](https://github.com/kitconcept/volto-export/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-export/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

This Volto add-on provides a route `/export` on any content object of your Plone 6 site that allows you to export the content in `plone.restapi`/`kitconcept.contentcreator` JSON format.

You can use this exports to feed back Plone using `kitconcept.contentcreator` (https://github.com/kitconcept/kitconcept.contentcreator) for maximum functionality or bare `plone.restapi`.

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-export
cd my-volto-project
```

Add `@kitconcept/volto-export`to your `package.json`:

```
"addons": [
    "@kitconcept/volto-export"
],

"dependencies": {
    "@kitconcept/volto-export": "*"
}
```

Download and install the new add-on by running:

```
yarn
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login. The new route should be available under any content URL.

## Usage

Install the add-on in your project, then once you have your site up and running, on any content, append `/export` to get the exported data.

```
https://plone.org/foundation/export
```

You will get a JSON file like:

```json
{
  "@type": "Document",
  "id": "teaser",
  "title": "Block: Grid-Block mit Teasern",
  "description": "Der Grid-Block erlaubt das Hinzufügen mehrspaltiger Blöcke. Ein Grid-Block kann zwischen ein und vier Spalten mit unterschiedlichen Blöcken enthalten. Text, Teaser, Bilder und Videos können in einem Grid-Block hinzugefügt werden.",
  "review_state": "published",
  "blocks": {
    "d3f1c443-583f-4e8e-a682-3bf25752a300": {
      "@type": "title"
    },
    "efd53af2-5cd1-43a6-893f-444272824a8c": {
      "@type": "__grid",
      "columns": [
        ...
```

# License

The project is licensed under the MIT license.
