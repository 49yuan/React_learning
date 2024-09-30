import dish1 from "../assets/dish1.webp";
import dish2 from "../assets/dish3.webp";
import dish3 from "../assets/dish2.webp";

export const Recipe = () => {
    const recipes = [
        {
            title: "Recipe Name",
            explain: "Lorem ipsum dolor sit, amet consecteturadipisicing elit. Expedita hic excepturi laudantium. Doloremque eveniet provident quonihil ipsum?",
            price: 20,
            src: dish1,
        },
        {
            title: "Recipe Name",
            explain: "Lorem ipsum dolor sit, amet consecteturadipisicing elit. Expedita hic excepturi laudantium. Doloremque eveniet provident quonihil ipsum?",
            price: 20,
            src: dish2,
        },
        {
            title: "Recipe Name",
            explain: "Lorem ipsum dolor sit, amet consecteturadipisicing elit. Expedita hic excepturi laudantium. Doloremque eveniet provident quonihil ipsum?",
            price: 20,
            src: dish3,
        }
    ]
    return (
        <section className="recipe" id="recipe">
            <div className="recipe-title">Hot selling Recipe</div>
            <div className="card-list">
                {recipes.map((recipe, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={recipe.src} alt={recipe.title} />
                            <div className="row">
                                <span className="card-title">{recipe.title}</span>
                                <span className="recipe-num">- 2 +</span>
                            </div>
                            <div className="card-explain">{recipe.explain}</div>
                            <div className="row bottom">
                                <span className="recipe-price">{`$ ${recipe.price}`}</span>
                                <div className="btn2">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
            <div className="recipe-more">
                <div className="btn">
                    <a href="#">View All Recipe</a>
                </div>
            </div>
        </section>
    );
}