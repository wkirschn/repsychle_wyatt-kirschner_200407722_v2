//
//     Name:        Wyatt Kirschner
//     Student ID:  200407722
//     Course:      COMP2068
//     Project:     Assignment 2
//

//Custom Client side JavaScript for UI Functionality

//Delete Confirmation popup - attach to an HTML element with the class of "delete"

$('.delete').on('click',() =>
{
    return confirm('Are you sure you want to delete this item?')
})