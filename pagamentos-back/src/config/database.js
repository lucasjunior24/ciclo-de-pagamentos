const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://pagamento:pagamento@cluster0.jy1ah.mongodb.net/pagamentos?retryWrites=true&w=majority'
module.exports = mongoose.connect(url, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, () => console.log('conectado ao banco'))

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."