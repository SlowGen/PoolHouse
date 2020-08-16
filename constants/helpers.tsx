export const totalTips = (a1, a2, a3, a4, tipoutPct) => {
  return  (a1 + a2 + a3 + a4) * (100-tipoutPct)
}

export const totalMetric = (m1, m2, m3, m4) => {
  return m1 + m2 + m3 + m4
}

export const amtPerMet = (tips, metrics) => tips / metrics

export const gets = (amtPer, metric) => amtPer * metric
