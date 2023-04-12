"use strict";
const AWS = require("aws-sdk");

const buscarItens = async (evento) => {
const dynamodb = new AWS.DynamoDB.DocumentClient();
let itens;
try {
    const resultados = await dynamodb.scan({
        TableName: "TabelaDeItens"
    }).promise();

    itens = resultados.Items;

} catch (erro) {
    console.log(erro);
}

return {
    statusCode: 200,
    body: JSON.stringify(itens),
};
};

module.exports = {
handler: buscarItens,
};