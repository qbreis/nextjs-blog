import Link from 'next/link';
const Categories = ({categories}: any) => {
    if(!categories) {
        return <></>
    }
    return (
        <div style={{border: '2px #f00 solid'}}>
            Categorías: 
            {categories?.map((postCategory: any) => 
                (

                    <Link href={`/category/${postCategory}`}>
                        <a>{postCategory}</a>
                    </Link>

                )
            )}
        </div>   
    );
}
    
export default Categories;