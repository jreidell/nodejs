const BlogModel = require('../models/Blog');

const blog_read_all = (req, res) => {
    BlogModel.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result } );
    })
    .catch((err) => {
        console.log(err);
        res.status(500).render('500', { title: 'Error!', error: err } );
    });
};

const blog_read_one = (req, res) => {
    const id = req.params.id;
    BlogModel.findById(id)
        .then((result) => {
        res.render('blogs/details', { title: 'Blog Details', blog: result } );
    })
    .catch((err) => {
        console.log(err)
        res.status(500).render('500', { title: 'Error!', error: err } );
    });
};

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'New Post' } );
};

const blog_create_post = (req, res) => {
    const blog = new BlogModel(req.body);

    blog.save()
    .then((result) => {
        console.log('saved new blog entry');
        res.redirect('/blogs');
    })
     .catch((err) => {
         console.log(err);
         res.status(500).render('500', { title: 'Error!', error: err } );
        });
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    BlogModel.findByIdAndDelete(id)
        .then((result) => {
            console.log(`deleted blog id: ${id}`);
            res.json({ redirect: '/blogs' });
       })
    .catch((err) => {
        console.log(err)
        res.status(500).render('500', { title: 'Error!', error: err } );
    });
};

const blog_update_get = (req, res) => {
    const id = req.params.id;
    BlogModel.findById(id)
        .then((result) => {
        res.render('blogs/update', { title: 'Update Blog', blog: result } );
    })
    .catch((err) => {
        console.log(err)
        res.status(500).render('500', { title: 'Error!', error: err } );
    });
};

const blog_update_post = (req, res) => {
    const id = req.params.id;
    const updateBlogPost = new BlogModel(req.body);
    //updateBlogPost._id = id;
    console.log(updateBlogPost);
    BlogModel.findByIdAndUpdate(id, { $set: updateBlogPost } )
        .then((result) => {
            console.log(`updated blog id: ${id}`);
            res.redirect('/blogs');
       })
    .catch((err) => {
        console.log(err)
        res.status(500).render('500', { title: 'Error!', error: err } );
    });
};

module.exports = {
    blog_create_get,
    blog_create_post,
    blog_read_one,
    blog_read_all,
    blog_update_get,
    blog_update_post,
    blog_delete
};



// CUT CODE ARCHIVE
//  app.get('/add-blogs', (req, res) => {
//     const blogs = [
//         { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur', body: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ' },
//         { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur', body: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. '  },
//         { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur', body: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. '  },
//     ];

//     const blog0 = new BlogModel({
//         title: blogs[0].title,
//         snippet: blogs[0].snippet,
//         body: blogs[0].body
//     });

//     const blog1 = new BlogModel({
//         title: blogs[1].title,
//         snippet: blogs[1].snippet,
//         body: blogs[1].body
//     });

//     const blog2 = new BlogModel({
//         title: blogs[2].title,
//         snippet: blogs[2].snippet,
//         body: blogs[2].body
//     });

//     blog0.save()
//     .then((result) => {
//         console.log('saved blog0');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     blog1.save()
//     .then((result) => {
//         console.log('saved blog1');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     blog2.save()
//     .then((result) => {
//         console.log('saved blog2');
//     })
//     .catch((err) => {
//         console.log(err)
//     });

//     BlogModel.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware...');
//     next();
// });

// app.use((req, res, next) => {
//     morgan.
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.get('/add-blog', (req, res) => {
//     const Blog = new BlogModel({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     Blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     BlogModel.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });

// app.get('/one-blog', (req, res) => {
//     BlogModel.findById('651c5c65195ad9b578d2046d')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });
