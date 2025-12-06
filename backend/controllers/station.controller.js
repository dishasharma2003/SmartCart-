import axios from "axios";

export const SearchTrainStationList = async (req, res) => {
    try {
        const { trainNo, trainDate } = req.query
        if (!trainNo && !trainDate) {
            return res.json({
                success: false,
                message: "Query is missing"
            });
        }
        const trainResult = await axios.get(`https://railradar.in/api/v1/trains/${trainNo}/schedule?journeyDate=${trainDate}`)
        if (!trainResult.data.success) {
            return res.json({
                success: false
            })
        }
        return res.json({
            success: true,
            data: {
                trainDetail: trainResult.data.data.train,
                station: trainResult.data.data.route
            }
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
        })
    }
}