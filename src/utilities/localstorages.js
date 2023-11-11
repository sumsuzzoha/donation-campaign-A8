const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('Donate-amount');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id => {
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find(cardId => cardId === id);
    if (!exists) {
        storedDonation.push(id);
        localStorage.setItem('Donate-amount', JSON.stringify(storedDonation));
    }
}
export { getStoredDonation, saveDonation };