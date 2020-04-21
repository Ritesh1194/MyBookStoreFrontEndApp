export class Product {
	id:number;
	name:string;
 	description:string;
 	price:number;
 	imageUrl:string;
 	constructor(id,name,description='',price=0,imageUrl='https://www.readingsanctuary.com/wp-content/uploads/2018/03/Harry-Potter-and-the-Cursed-Child-Book-Poster-cover-image-202x300.jpg'){
 		this.id=id
 		this.name=name
 		this.description=description
 		this.price=price
 		this.imageUrl=imageUrl
 	}
}
