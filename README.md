# volto-export (by kitconcept)

This Volto add-on provides a route `/export` on any content object of your Plone 6 site that allows you to export the content in `plone.restapi`/`kitconcept.contentcreator` JSON format.

You can use this exports to feed back Plone using `kitconcept.contentcreator` (https://github.com/kitconcept/kitconcept.contentcreator) for maximum functionality or bare `plone.restapi`.

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
