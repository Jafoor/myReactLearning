import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummery';

const INGREDIENT_PRICES ={
    salad: 20,
    cheese: 40,
    meat: 50,
    bacon: 30
};

class BurgerBuilder extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0

        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey]
        }).reduce((sum, el) => {
            return sum+el;
        }, 0);
        this.setState({purchasable: sum>0})
    };

    addIngredientsHandler = (type) => {
        const oldCound = this.state.ingredients[type];
        const updatedCount = oldCound + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };


    removeIngredientsHandler = (type) => {
        const oldCound = this.state.ingredients[type];
        if(oldCound >= 1){
            const updatedCount = oldCound - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceDeducition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeducition;
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
            this.updatePurchaseState(updatedIngredients);
        } else{
            return 0;
        }
        
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert("You Continue!");
    }
    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show = {this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                    price = {this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchaseCanceled = {this.purchaseCancelHandler}
                    purchaseContinue = {this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded = {this.addIngredientsHandler}
                ingredientRemove = {this.removeIngredientsHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
};

export default BurgerBuilder;

