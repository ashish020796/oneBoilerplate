const productModel = require("../models/product.js");
const roleModel = require("../models/role");

const product = {
  async addProduct(req, res) {
    try {
      if (req.body && req.body.description && req.body.name) {
        let added = await new productModel(req.body).save();
        return res
          .status(201)
          .send({ data: added, message: "Product added successfully" });
      } else {
        return res.status(401).send("incomplete data");
      }
    } catch (err) {
      return res.status(401).send(err);
    }
  },
  async updateProduct(req, res) {
    try {
      if (req.body && req.body.description && req.body.name) {
        let update = await productModel
          .updateOne({ _id: req.param.id }, req.body)
          .save();
        return res
          .status(200)
          .send({ data: update, message: "Product updated successfully" });
      } else {
        return res.status(401).send("incomplete data");
      }
    } catch (err) {
      return res.status(401).send(err);
    }
  },

  async getProductById(req, res) {
    try {
      if (req.param && req.param.id) {
        return res
          .status(200)
          .send(await productModel.findById(req.param.id).lean());
      } else {
        return res.status(401).send("pls provide product Id");
      }
    } catch (err) {
      return res.status(401).send(err);
    }
  },
  async getProducts(req, res) {
    try {
      return res.status(200).send({
        data: await productModel.find().lean(),
        message: "Products sent successfully",
      });
    } catch (err) {
      return res.status(401).send(err);
    }
  },
  async deleteProduct(req, res) {
    try {
      if (req.param && req.param.id) {
        return res.status(200).send({
          data: await productModel.remove({ _id: req.param.id }).lean(),
          message: "Product deleted successfully",
        });
      }
    } catch (err) {
      return res.status(401).send(err);
    }
  },

  async createRoles(req, res) {
    let roles = [
      {
        name: "Admin",
        specialRight: true,
        moduleRights: [
          {
            module: "product",
            rights: {
              read: true,
              create: true,
              delete: true,
              update: true,
            },
          },
        ],
      },

      {
        name: "Seller",
        specialRight: false,
        moduleRights: [
          {
            module: "product",
            rights: {
              read: true,
              create: true,
              delete: false,
              update: true,
            },
          },
        ],
      },
      {
        name: "Supporter",
        specialRight: false,
        moduleRights: [
          {
            module: "product",
            rights: {
              read: true,
              create: false,
              delete: true,
              update: false,
            },
          },
        ],
      },

      {
        name: "Customer",
        specialRight: false,
        moduleRights: [
          {
            module: "product",
            rights: {
              read: true,
              create: false,
              delete: false,
              update: false,
            },
          },
        ],
      },
    ];

    for (let i = 0; i < roles.length; i++) {
      await new roleModel(roles[i]).save();
    }
    return res.status(200).send("added roles")
  },
  async getRoles(req, res) {
    try {
      return res.status(200).send({
        data: await roleModel.find().lean(),
        message: "Roles sent successfully",
      });
    } catch (err) {
      return res.status(401).send(err);
    }
  },
};
module.exports = product;
