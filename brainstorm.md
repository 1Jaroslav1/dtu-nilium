# Sensor Kit Brainstorm

**Kit (Atech):** temperature & humidity · distance · button v2.0 · screen v1.1 · orientation sensor · microphone · knob · speaker

In practice this gives us:
- **Environment:** temperature/humidity
- **Presence and level:** distance
- **Motion and tilt:** orientation
- **Sound in and out:** mic, speaker
- **Human interface:** button, knob, screen

The strongest ideas combine 3–4 of these.

---

## 🧬 Life science

| Idea | Problem | Sensors |
|---|---|---|
| **Cold-chain sample guardian** | Vaccines, reagents and biopsies get ruined by temperature swings or rough handling, and nobody finds out until the sample fails. | Temp/humidity + orientation (detects drops, tilts, shocks) + screen showing an "OK / COMPROMISED" verdict + button to acknowledge |
| **Lab fridge/incubator watchdog** | Incubator doors left open overnight ruin cell cultures. | Distance (door ajar) + temp/humidity + speaker alarm + knob to set the threshold |
| **Fall and tremor monitor for elderly people** | Falls go unnoticed, and Parkinson's tremor progression is hard to track at home. | Orientation (fall detection, tremor frequency) + mic (calls for help) + big SOS button + speaker |
| **Hand-hygiene / sterile-zone compliance** | People skip the 20-second hand wash in clinics and labs. | Distance (hands at sink) + screen countdown + speaker chime |
| **Plant/greenhouse phenotyping station** | Researchers log plant growth by hand. | Distance from above (plant height over time) + temp/humidity + screen |
| **Cough / respiratory sound tracker** | Cough frequency at night is a useful clinical signal (COPD, asthma). | Mic (count events) + temp/humidity (correlate with room climate) + screen summary |

## 🚀 Space

| Idea | Problem | Sensors |
|---|---|---|
| **CubeSat / payload attitude demo** | Teaching or testing satellite orientation control. | Orientation + screen (live attitude display) + knob (target angle) |
| **Habitat crew wellbeing panel** | Isolated crews (ISS, Mars analogs, Antarctic bases) suffer stress and poor sleep, and the habitat climate drifts. | Temp/humidity + mic (noise levels, which matter a lot on the ISS) + button/knob for a daily mood check-in + screen |
| **Docking / proximity alert** | Visualising the final approach of two modules. | Distance + orientation (alignment) + speaker tone that speeds up as the gap closes, like a parking sensor |
| **Launch vibration logger** | Payloads need proof of the g-loads they went through. | Orientation (shock and vibration logging) + temp + button to arm |
| **Microgravity plant grow box** | Monitoring experiments with no crew time available. | Temp/humidity + distance (growth) + screen |

## 🏗️ Construction

| Idea | Problem | Sensors |
|---|---|---|
| **Structural tilt / settlement monitor** | Scaffolding, retaining walls and old buildings lean slowly, and nobody notices until it's dangerous. | Orientation (slow tilt drift) + speaker alarm + screen |
| **Concrete curing monitor** | Concrete strength depends on curing temperature and humidity, and sites guess. | Temp/humidity (maturity method) + screen saying "ready to strip formwork in X h" |
| **Noise-exposure badge for workers** | Hearing loss is one of the most common occupational diseases. | Mic (dB level × time = dose) + screen + speaker warning |
| **Crane / excavator blind-spot alert** | People get hit in machine blind spots. | Distance + speaker beeper + orientation (only active when the machine is moving) |
| **Smart spirit level / angle tool** | Fast digital levelling and angle setting. | Orientation + screen + knob (target angle) + speaker beep when on target |
| **Lone-worker man-down alarm** | Someone falls on a quiet site and lies there unnoticed. | Orientation (fall plus no movement) + button (I'm OK / SOS) + speaker |

## 🌊 Life below water

> Caveat: you'd need a waterproof enclosure, and ultrasonic distance sensors behave differently in water. Most ideas work best at the surface or on a buoy.

| Idea | Problem | Sensors |
|---|---|---|
| **Smart buoy for coastal monitoring** | Low-cost monitoring of air temperature and wave state. | Orientation (wave height and period from motion) + temp/humidity + screen/logging |
| **Aquaculture tank monitor** | Fish farms lose stock to water-level or temperature problems. | Distance (water level from above) + temp (waterproof probe) + speaker alarm |
| **Underwater noise pollution listener** | Ship noise disturbs whales and fish, and data is scarce. | Mic (with a hydrophone adapter) + screen showing dB levels |
| **Tide / flood level gauge** | Cheap early warning for harbours and low-lying areas. | Distance pointing down at the water + screen + speaker |
| **Diver ascent-rate trainer** | Ascending too fast causes decompression sickness. | Orientation + speaker cues (demo in a pool) |
| **Coral bleaching early warning** | Heat stress is the main cause of bleaching. | Temperature trend + alert |

## 📦 Warehouse

| Idea | Problem | Sensors |
|---|---|---|
| **Shelf stock-level sensor** | Running out of stock on a shelf goes unnoticed. | Distance (how deep the stack is) + screen + button to confirm a restock |
| **Pick-to-light station** | Picking errors and slow training of new staff. | Screen ("take 3 from bin B4") + distance (hand entered the bin) + button to confirm + speaker for wrong-bin feedback |
| **Forklift impact / near-miss logger** | Rack collisions go unreported and weaken the racks. | Orientation (shock) + distance (proximity) + speaker |
| **Rack tilt / damage monitor** | A bent rack can collapse. | Orientation per rack upright + alarm |
| **Climate zone monitor** | Food, pharma and electronics need controlled storage. | Temp/humidity + screen + knob to set zone limits |
| **Package drop / mishandling tag** | Fragile goods arrive broken and nobody knows where it happened. | Orientation (drop/flip log) + button + screen |
| **Dock door / loading bay assistant** | Trucks back into the dock unsafely. | Distance + speaker (beep rate) + screen (STOP / GO) |

---

## 🎯 Top picks

1. **Cold-chain sample guardian** (life science, also works for warehouse logistics). It uses almost every sensor in a meaningful way, the problem is clear and costly, and it's easy to demo: shake it, warm it with your hand, and watch it flip to "COMPROMISED".
2. **Lone-worker / man-down alarm** (construction, also elderly care and warehouses). It's a strong safety story, gives a dramatic live demo, and applies across several domains.
3. **Pick-to-light station** (warehouse). It's very interactive and uses the button, screen, distance sensor and speaker naturally, and it has clear return on investment through fewer picking errors.
4. **Habitat crew wellbeing panel** (space). It's the most original of the space ideas and fits the kit well, because noise plus climate plus mood is a real problem documented on the ISS.

**Cross-domain idea:** one "condition passport" device (temp/humidity + orientation + screen + button) that travels with any valuable item, whether it's a sample, a satellite part or a pallet. One build, and you can pitch it to three of the domains.

## Next steps

- Pick one idea and work out user, value, demo script and build plan
- Stress-test the shortlist (product-challenger / founder-council lens)
