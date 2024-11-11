// Function to find the aggregator with minimum charges
const findMinimumCharges = (aggregators) => {
    return aggregators.reduce((min, current) => (current.charges < min.charges ? current : min));
};

// Function to sort aggregators by charges in ascending order
const sortAggregatorsByCharges = (aggregators) => {
    
    return aggregators.slice().sort((a, b) => a.charges - b.charges);
};

module.exports = {
    findMinimumCharges,
    sortAggregatorsByCharges
};
