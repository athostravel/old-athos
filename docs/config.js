module.exports = {
    navigation: [
        {
            group: 'Getting Started',
            children: [
                {
                    title: 'Installation',
                    url: { name: 'Home' }
                }
            ]
        },
        {
            group: 'UI Components',
            children: [
                {
                    title: 'Banner',
                    url: { name: 'Banner' },
                    children: [
                        {
                            title: 'BannerOrion',
                            url: { name: 'BannerOrion' }
                        }
                    ]
                },
                {
                    title: 'Button',
                    url: { name: 'Button' },
                    children: [
                        {
                            title: 'Outlined',
                            url: { name: 'Button', hash: '#outlined' }
                        },
                        {
                            title: 'Casper',
                            url: { name: 'Button', hash: '#casper' }
                        }
                    ]
                },
                {
                    title: 'Icon',
                    url: { name: 'Icon' }
                }
            ]
        }
    ]
}
