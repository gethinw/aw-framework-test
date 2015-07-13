module.exports = function(app) {
    var express = require('express');
    var detailFieldRouter = express.Router();

    detailFieldRouter.get('/', function(req, res) {
        res.send({
            data: [
                {
                    "type": "detail-field",
                    "id": "1",
                    "attributes": {
                        "type": "field",
                        "field": "firstName",
                        "title": "First Name"
                    }
                },
                {
                    "type": "detail-field",
                    "id": "2",
                    "attributes": {
                        "type": "field",
                        "field": "lastName",
                        "title": "Last Name"
                    }
                },
                {
                    "type": "detail-field",
                    "id": "3",
                    "attributes": {
                        "type": "field",
                        "field": "street",
                        "title": "Street"
                    }
                },
                {
                    "type": "detail-field",
                    "id": "4",
                    "attributes": {
                        "type": "field",
                        "field": "city",
                        "title": "City"
                    }
                },
                {
                    "type": "detail-field",
                    "id": "5",
                    "attributes": {
                        "type": "field",
                        "field": "role",
                        "title": "Role"
                    }
                }
            ]
        });
    });

    detailFieldRouter.post('/', function(req, res) {
        res.status(201).end();
    });

    // detailFieldRouter.get('/:id', function(req, res) {
    //   res.send({
    //     'detail-field': {
    //       id: req.params.id
    //     }
    //   });
    // });

    // detailFieldRouter.put('/:id', function(req, res) {
    //   res.send({
    //     'detail-field': {
    //       id: req.params.id
    //     }
    //   });
    // });

    // detailFieldRouter.delete('/:id', function(req, res) {
    //   res.status(204).end();
    // });

    app.use('/api/detail-fields', detailFieldRouter);
};
