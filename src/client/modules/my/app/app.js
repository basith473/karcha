import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    
    typeOptions = [
        {
            label: 'Expense',
            value: 'Expense'
        },
        {
            label: 'Income',
            value: 'Income'
        }
    ]

    categoryOptions = [
        {
            label: 'Fuel',
            value: 'Fuel'
        },
        {
            label: 'Grocery',
            value: 'Grocery'
        }
    ]

    @track showSpinner = false;
}
