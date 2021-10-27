import React, { useContext } from 'react'
import {ContextInfo} from './contextInfo'
import VenueDetails from './VenueDetails'

function SearchedList() {
    // Context info
    const { venueList, failedSearch } = useContext(ContextInfo)

    // valid restaurants
    const validList = venueList.filter(item => item.categories.length > 0)

    // Filters result to only show restaurants or food
    const newList = validList.filter(item => {
        const type = item.categories[0].name
        
        // Conditional statement to make sure the name of the venue
        if (type.indexOf('Restaurant') > -1) {
            return true
        } else if (type.indexOf('Food') > -1) {
            return true
        } else if (type.indexOf('Joint') > -1) {
            return true
        } else if (type.indexOf('Steakhouse') > -1) {
            return true
        } 
        else {
            return false
        }
     })


    // Map of venueList
    const resultComponents = newList.map(item => <VenueDetails place={item} key={item.id} />)

    return (
        <div className='homeList'>
            {failedSearch === 'failed' ?
            <div id='failed'>
                <h1>I'm sorry, you have entered an invalid search. Please try again.</h1>
                <p>(try somehting like "Salt Lake City, ut" for the location and "italian" or "steak" for the food.)</p>
            </div>
            : 
            resultComponents}
        </div>
    )
}

export default SearchedList