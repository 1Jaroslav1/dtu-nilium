# Pucio — childhood asthma pitch

**Pitch 4:00 · Questions 1:00.** This script follows the childhood-asthma pitch. The accompanying HTML deck still follows the earlier academic cough-research pitch.

| Part | Time | Elapsed |
|---|---:|---|
| Problem | 60 s | 0:00–1:00 |
| Solution + demo | 90 s | 1:00–2:30 |
| Team + learnings | 45 s | 2:30–3:15 |
| Next step + ask | 45 s | 3:15–4:00 |
| Questions | 60 s | 4:00–5:00 |

## 1 · Problem · 1:00

*Pause after the opening question and again after “ninety-three.”*

> “Did asthma wake your child at night?” That’s one of four questions clinicians use to assess symptom control in school-age children with asthma.
>
> But who’s there to tell the doctor what happened? Most nights, the parents are asleep too.
>
> In a small study of fifteen children with asthma and troublesome night symptoms, families reported cough on sixty-six nights. Bedroom recordings picked it up on ninety-three. The two records told very different stories.
>
> A nationwide Danish study found signs of poor asthma control in one in four treated two- to five-year-olds. Across the study’s age groups, only twenty-eight percent of children and teens with poor control were in specialist care.
>
> At the next appointment, a doctor may ask how the nights have been. And a parent can only say, “I think he coughed a bit last week.”

[GINA 2026, Table 2](https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf#page=12) · [Bedroom recording study](https://pubmed.ncbi.nlm.nih.gov/8469572/) · [Danish nationwide cohort](https://link.springer.com/article/10.1186/s12931-023-02482-7)

## 2 · Solution + demo · 1:30

*Show the box or microphone during the opening. Use about 15 seconds for the live count. Have the [prototype dashboard](http://localhost:8010/) open before the pitch.*

> So we built a cough counter that can sit on a shelf by the bed. There’s nothing to wear and no phone to take to bed.
>
> Here’s the counter running now. Watch the number as I cough.

*Cough once from at least half a metre away. Point to the updated count and timestamp. If the live count stalls, use a captured dashboard and say, “Here’s the counter from a test run. Each detection appears with a timestamp.”*

> The current prototype runs on a laptop. The bedside version would do the counting on the box itself and send only counts and timestamps to the app.
>
> In the morning, a parent could see how many coughs the device detected and when they happened. After a few weeks, they could bring a one-page summary to the doctor and show whether the nights are getting quieter. Parents could also note when they heard a wet cough and how long it’s been going on. We’d test automatic wet-or-dry labels separately.
>
> We also plan to flag persistently high bedroom humidity. A review linked dampness and mould at home to rates of several respiratory and asthma-related problems that were thirty to fifty percent higher. That gives parents something concrete to check in the room.

[Prototype setup and results](../../cough-poc/README.md) · [Pediatric wet and dry cough study](https://doi.org/10.1016/j.chest.2020.06.067) · [Dampness and respiratory outcomes meta-analysis](https://pubmed.ncbi.nlm.nih.gov/17661925/)

## 3 · Team + learnings · 0:45

*Show the team photo. Give each name a beat.*

> We’re four. Artur works in digital-health venture capital. Mateusz works in startup business development. Jaroslav is a go-to-market engineer. And Jan is a forward-deployed engineer at Snowflake.
>
> We started today with a necklace that would record cough all day. We showed the idea to people around us and heard two things. They didn’t want another device to wear, and they were uncomfortable with all-day recording.
>
> So we moved the device to the bedroom and focused on the hours families have the hardest time observing. The design keeps the overnight cough log and discards the sound.

## 4 · Next step + ask · 0:45

*Pause after naming the two groups. Leave the ask visible for questions.*

> Our next step is to run a two-week pilot with twenty families whose children have asthma. With consent, we’ll compare the device’s counts against a manual reference and ask parents what they’d pay for the log. We’ll ask clinicians whether the one-page report would help in a real consultation.
>
> For that, we need two introductions. First, to childhood asthma doctors and researchers who can help validate the device. Second, to families with children who have asthma who can try it in our two-week pilot.
>
> If you know someone in either group, please find us afterwards. The doctor already asks about the nights. We want parents to have a record they can bring.

## Questions · 4:00–5:00

- **Does it tell me whether asthma is under control?** It gives families a record of detected coughs to bring to an appointment. Clinicians assess asthma control using symptoms and the rest of the clinical picture.
- **Does it record audio?** The laptop prototype saves test audio. The planned bedside device would retain only counts and timestamps. Any audio used for manual annotation in the pilot would be collected separately with consent.
- **How will you know whose cough it heard?** We’ll check for missed and extra detections in real bedrooms, including cases where another person coughs nearby.
