export interface ILogo {
    fields: {
        file: {
            url: string
            details: {
                image: {
                    width: number,
                    height: number
                }
            }
        }
    }
}

export interface INewsConfig {
    logo: ILogo,
    title: string,
    menuLabel: string,
    searchLabel: string
}

export interface IHit {
    topics: {
        title: string
    },
    organization: [
        {
            fields: {
                name: string
            }
        }
    ]
    name: string,
    description: string,
    imageUrl: string,
    publicationDate: string,
    slug?: string
}