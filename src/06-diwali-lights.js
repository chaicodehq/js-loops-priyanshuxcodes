/**
 * 🪔 Sharma ji ki Diwali Decoration
 *
 * Sharma ji apne ghar ko Diwali pe sajana chahte hain light strings se.
 * Unke paas ek budget hai aur market mein alag alag colors ki light strings
 * hain different lengths mein. Sharma ji sab kuch lena chahte hain, lekin
 * budget se zyada nahi!
 *
 * Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
 *
 * Rules:
 *   Step 1 - Use for...of to loop through lightStrings and add ALL of them
 *     to selected list with their cost calculated
 *   Step 2 - Use a while loop to check: agar totalCost > budget, toh remove
 *     the LAST item from selected, subtract its cost, and keep removing until
 *     totalCost <= budget
 *
 * @param {Array<{color: string, length: number}>} lightStrings - Available light strings
 * @param {number} budget - Sharma ji ka budget in rupees
 * @returns {{ selected: Array<{color: string, length: number, cost: number}>, totalLength: number, totalCost: number }}
 *
 * Validation:
 *   - Agar lightStrings array nahi hai ya budget positive number nahi hai,
 *     return: { selected: [], totalLength: 0, totalCost: 0 }
 *
 * @example
 *   diwaliLightsPlan(
 *     [{ color: "golden", length: 5 }, { color: "white", length: 10 }, { color: "multicolor", length: 3 }],
 *     400
 *   )
 *   // golden: 5*50=250, white: 10*30=300, multicolor: 3*40=120
 *   // Total = 670 > 400, remove multicolor (670-120=550), still > 400,
 *   // remove white (550-300=250), 250 <= 400
 *   // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
 */
export function diwaliLightsPlan(lightStrings, budget) {
  // Your code here
  if(!Array.isArray(lightStrings) || typeof budget !== "number" || !(budget > 0)) return { selected: [], totalLength: 0, totalCost: 0 }

  let totalCost = 0
  let totalLength = 0
  const items = []
  for(const obj of lightStrings) {
    const key = obj.color
    if(key === "golden") {
      items.push({color: key, length: obj.length, cost: obj.length * 50})
      totalCost += obj.length * 50
      totalLength += obj.length
    } else if(key === "multicolor") {
      items.push({color: key, length: obj.length, cost: obj.length * 40})
      totalCost += obj.length * 40
      totalLength += obj.length
    } else if(key === "white") {
      items.push({color: key, length: obj.length, cost: obj.length * 30})
      totalCost += obj.length * 30
      totalLength += obj.length
    } else {
      items.push({color: key, length: obj.length, cost: obj.length * 35})
      totalCost += obj.length * 35
      totalLength += obj.length
    } 
  }
  while (totalCost > budget) {
    const removed = items.pop()
    totalLength -= removed.length
    totalCost -= removed.cost
  }

  return {selected: items, totalLength: totalLength, totalCost: totalCost}
}
