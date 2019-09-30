let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        console.log('hit create')
        const { text, time } = req.body
        messages.push({ id, text, time })
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        console.log('hit read')
        res.status(200).send(messages)

    },

    update: (req, res) => {
        console.log('hit update')
        const { text } = req.body;
        const updateId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateId);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        console.log(res)
        res.status(200).send(messages)


    },


    delete: (req, res) => {
        console.log('hit delete')
        const deleteId = req.params.id
        messageIndex = messages.findIndex(message => message.id == deleteId)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}
