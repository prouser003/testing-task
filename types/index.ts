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