export type Section = {
    title: string,
    subtitle: string,
    description: string,
    order: number,
    sectionId: string
}

export type Review = {
    name: string, 
    location: string, 
    text: string,
    date: string,
    image: string,
    stars: number
}