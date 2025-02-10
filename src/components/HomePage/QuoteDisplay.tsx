const QuoteDisplay = async (
  setQuote: React.Dispatch<React.SetStateAction<string>>,
  setAutor: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "iMi/GYrgQvFFrw8DRcJCFw==I98JA5g664bAOAhU",
      },
    });
    const data = await response.json();
    setQuote(data[0].quote);
    setAutor(data[0].author);
  } catch (error) {
    console.error("Błąd podczas pobierania cytatu:", error);
  } finally {
    setLoading(false);
  }
};

export default QuoteDisplay;
