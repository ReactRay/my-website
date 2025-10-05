import cron from 'node-cron'
import axios from 'axios'

const URL = 'https://www.radwan-mansur.com/api/ping'

const job = cron.schedule('*/14 * * * *', async () => {
  try {
    const res = await axios.get(URL)
    console.log('✅ Ping successful:', res.status)
  } catch (err) {
    console.error('❌ Ping failed:', err.message)
  }
})

export default job
