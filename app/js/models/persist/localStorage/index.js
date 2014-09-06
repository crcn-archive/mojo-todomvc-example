var Pouchdb = require("pouchdb");

exports.collection = function (name) {

  return function (collection) {

    collection.storage = new Pouchdb(name);

    return {
      load: function (complete) {
        this.storage.allDocs({ include_docs: true }, function (err, result) {
          if (err) return complete(err);
          complete(null, result.rows.map(function (row) {
            return row.doc;
          }))
        });
      }
    };
  };

}


exports.model = function () {
  return function (model) {

    var storage = model.collection.storage;

    return {
      save: function (complete) {
        var data = this.serialize();

        if (!data._id) {
          data._id = Date.now() + "_" + Math.round(Math.random() * 999999);
          storage.put(data, function (err) {
            if (err) return complete(err);
            complete(null, data);
          }); 
        } else {
          storage.get(data._id, function (err, doc) {
            if (err) return complete(err);
            storage.put(data, doc._rev, function (err) {
              if (err) return complete(err);
              complete(null, data);
            });
          });
        }
        
      },
      load: function (complete) {
        storaget.get(this._id, complete);
      },
      remove: function (complete) {
        storage.get(this._id, function (err, doc) {
          if (err) return complete(err);
          storage.remove(doc, complete);
        });

      }
    }
  }
}
