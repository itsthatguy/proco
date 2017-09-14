export default {
  "id": "properties.links",
  "type": "object",
  "required": [ "self" ],
  "properties": {
    "self": {
      "type": "string",
      "pattern": "^https?:\\/\\/[a-f]{3,10}\\.[a-f]{3}"
    }
  }
};