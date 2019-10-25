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
                        },
                        {
                            title: 'BannerSirius',
                            url: { name: 'BannerSirius' }
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
                    url: { name: 'Icon' },
                    children: [
                        {
                            title: 'IconList',
                            url: { name: 'IconList'}
                        }
                    ]
                },
                {
                    title: 'Price',
                    url: { name: 'Price' },
                    children: [
                        {
                            title: 'PriceButton',
                            url: { name: 'PriceButton' }
                        }
                    ]
                },
                {
                    title: 'Heading',
                    url: { name: 'Heading' }
                }
            ]
        }
    ]
}
