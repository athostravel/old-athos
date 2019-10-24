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
                    title: 'Banners',
                    children: [
                        {
                            title: 'Banner',
                            url: { name: 'Banner' }
                        },
                        {
                            title: 'BannerOrion',
                            url: { name: 'BannerOrion' }
                        }
                    ]
                },
                {
                    title: 'Buttons',
                    children: [
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
                        }
                    ]
                },
                {
                    title: 'Icons',
                    children: [
                        {
                            title: 'Icon',
                            url: { name: 'Icon' }
                        }
                    ]
                }
            ]
        }
    ]
}
