const put = async (endpoint = '', data = {}) => {
    const BASE_URL = 'http://localhost:5000/api/v1';

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        return response.json();
    } catch (e) {
        throw new Error(e);
    }
}

export default put;