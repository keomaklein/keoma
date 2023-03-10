var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/keomaklein/keoma.git', // Update to point to your repository  
        user: {
            name: 'Keoma', // update to use your name
            email: 'keoma.klein1@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)