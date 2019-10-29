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
                        },
                        {
                            title: 'BannerSirius',
                            url: { name: 'BannerSirius' }
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
                                    title: 'Casper',
                                    url: { name: 'Button', hash: '#casper' }
                                },
                                {
                                    title: 'Outlined',
                                    url: { name: 'Button', hash: '#outlined' }
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Form Controls',
                    children: [
                        {
                            title: 'Input',
                            url: { name: 'Input' }
                        },
                        {
                            title: 'Select',
                            url: { name: 'Select' }
                        },
                        {
                            title: 'Textarea',
                            url: { name: 'Textarea' }
                        }
                    ]
                },
                {
                    title: 'Icons',
                    children: [
                        {
                            title: 'Icon',
                            url: { name: 'Icon' }
                        },
                        {
                            title: 'IconList',
                            url: { name: 'IconList' }
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
