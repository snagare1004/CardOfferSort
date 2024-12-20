const paymentAggregators = require('./cardOfferData.json')
const { findMinimumCharges, sortAggregatorsByCharges } = require('./helpers');


module.exports = async function (req, res) {

    try {
        let cardNumber = req.body.cardNumber
        cardNumber = cardNumber.replace(/\s+/g, '');

        if (!cardNumber) {
            return res.status(400).json({ message: 'Card number is required.' });
        }
        const cardType = detectCardType(cardNumber);

        const filteredAggregators = paymentAggregators.filter(
            aggregator => aggregator.cardType === cardType
        );

        if (filteredAggregators.length === 0) {
            return res.status(404).json({ error: `No payment aggregators found for card type: ${cardType}` });
        }
        // Find the aggregator with the minimum charges
        const minimumChargesAggregator = findMinimumCharges(filteredAggregators);

        // Sort the payment aggregators array by charges in ascending order
        const sortedAggregators = sortAggregatorsByCharges(filteredAggregators);

        // Return response with sorted array and minimum charges aggregator
        res.status(200).json({
            cardNumber: cardNumber,
            minimumChargesAggregator: minimumChargesAggregator,
            sortedAggregators: sortedAggregators
        });
    }
    catch (error) {
        console.log("error-->", error);
        res.send({ errorMessage: error })
    }
}
const detectCardType = (cardNumber) => {
    if (/^4\d{12}(\d{3})?$/.test(cardNumber)) {
        return 'visa';
    }
    else if (/^5[1-5]\d{14}$/.test(cardNumber)) {
        return 'mastercard';
    }
    else if (/^6\d{15}$/.test(cardNumber)) {
        return 'rupay';
    } else {
        return 'unknown';
    }
};