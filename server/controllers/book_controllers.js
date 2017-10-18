let books = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { title, author } = req.body;
    books.push({id, title, author});
    id += 1;
    res.status(200).send(books);
  },

  read: (req, res) => {
    res.status(200).send(books);
  },

  update: (req, res) => {
    console.log(req.params.id, books);
    const updateID = req.params.id;
    let index = books.findIndex( book => book.id === parseInt(updateID) );
    books[index] = {
      id: books[index].id,
      title: req.body.title || books[index].title,
      author: req.body.author || books[index].author,
    };

    res.status(200).send(books);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    let index = books.findIndex( book => book.id === deleteID );

    books.splice(index, 1);

    res.status(200).send(books);
  }
}