export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cd41554ff9c1a4e51b2a402',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio',
                  apiId: '1ed0d0c4-a1c1-48c1-ae04-2969c5ab2a09'
                },
                {
                  buildHookId: '5cd41554b015133bb0a8c58d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2',
                  apiId: 'e95f13ee-6fcc-4708-85c9-f88d1a04af34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
