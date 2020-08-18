export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3bcf1ff3701e0103c1debc',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-97uzs5y7',
                  apiId: '02579fc8-c059-4e6e-875f-e207a7bcbca3'
                },
                {
                  buildHookId: '5f3bcf1ff3701e0095c1de06',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ihb2im8f',
                  apiId: '237280af-1beb-49a2-ad51-cee29caa15b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbuitvydas/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ihb2im8f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
