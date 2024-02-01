import { User } from "src/users/entity/user.entity"

export class Post{
    id: number
    title: string
    content: string
    published: boolean
    author: User
    authorId:number
}