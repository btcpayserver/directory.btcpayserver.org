# BTCPay Server Directory

BTCPay Server Directory is a place for merchants, projects and charities to showcase their store, websites or advertise their cause. If you're using BTCPay Server, feel free to add your website.

![Node CI](https://github.com/btcpayserver/directory.btcpayserver.org/workflows/Node%20CI/badge.svg)

## How to submit an entry?

**Submit entry only if you're using BTCPay Server to accept payments, we evaluate all submissions prior to adding**)

There are two ways to get your submission added to the directory:

1. If you have some basic GitHub knowledge, you can fork this repository, modify the [List.js](https://github.com/btcpayserver/directory.btcpayserver.org/blob/master/src/components/Directory/List.js) and do a pull request.
2. You can request someone else to add your submission by filling out the form on [this link](https://directory.btcpayserver.org/newentry) (GitHub account required). Alternatively, you can open an issue in the repository (please do not ignore the issue template).

## How to build the directory locally?

In order to build the website locally, you'll need [Node.js](https://nodejs.org/) >= 12.16 (or basically the latest LTS version).

The setup is straight forward:

```bash
# Install dependencies
npm install

# Serve locally (by default on port 3000)
npm start
```
