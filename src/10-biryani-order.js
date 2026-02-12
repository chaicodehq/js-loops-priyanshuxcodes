/**
 * 🍗 Paradise Biryani Batch System
 *
 * Paradise restaurant mein biryani orders aate hain. Kitchen ek batch mein
 * sirf 5 plates bana sakti hai. Agar ek order mein zyada plates hain toh
 * woh multiple batches mein split hota hai.
 *
 * Rules (use do...while loop):
 *   - orders is an array of numbers (plates per order): [3, 7, 2, ...]
 *   - Process orders one by one (for each order, use do...while for batching)
 *   - Each batch can have MAXIMUM 5 plates
 *   - If an order has more than 5, split into batches:
 *     e.g., order of 12 = batch(5) + batch(5) + batch(2) = 3 batches
 *   - Track: totalBatches, totalPlates, ordersProcessed
 *   - Skip orders that are not positive integers (0, negative, decimal, non-number)
 *
 * Validation:
 *   - Agar orders array nahi hai ya empty hai,
 *     return: { totalBatches: 0, totalPlates: 0, ordersProcessed: 0 }
 *
 * @param {number[]} orders - Array of plate counts per order
 * @returns {{ totalBatches: number, totalPlates: number, ordersProcessed: number }}
 *
 * @example
 *   biryaniBatchProcessor([3, 7, 2])
 *   // Order 3: 1 batch (3 plates)
 *   // Order 7: 2 batches (5 + 2 plates)
 *   // Order 2: 1 batch (2 plates)
 *   // => { totalBatches: 4, totalPlates: 12, ordersProcessed: 3 }
 *
 *   biryaniBatchProcessor([5, 10])
 *   // Order 5: 1 batch (5 plates)
 *   // Order 10: 2 batches (5 + 5 plates)
 *   // => { totalBatches: 3, totalPlates: 15, ordersProcessed: 2 }
 */
export function biryaniBatchProcessor(orders) {
  // Your code here
  if (!Array.isArray(orders) || orders.length === 0) return { totalBatches: 0, totalPlates: 0, ordersProcessed: 0 }

  let batches = 0
  let plates = 0
  let ordersProcessed = 0

  let i = 0
  do {
    let batchSize = orders[i]
    if(batchSize <= 0 || !Number.isInteger(batchSize)){
      i++
      continue
    }
    plates += batchSize
    ordersProcessed ++
    if(batchSize > 5) {
      while (batchSize >= 5){
        batchSize -= 5
        batches++
      }
    }
    if(batchSize <= 5 && batchSize != 0) batches++
    i++
  } while(i < orders.length)

    return {totalBatches: batches,totalPlates: plates, ordersProcessed}
}
