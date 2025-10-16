# Quick Reference Cards

Short, printable checklists for on-site use.  
Keep this page open during lab work or print it for your folder.  
Each section begins with a brief note on **why it matters**.


(safety-card)=
## 1) Safety – Essential

**Why this matters:**  
Safety is the foundation of professional experimental physics.  
It protects you, your colleagues, and the integrity of the equipment.  
Respecting safety procedures ensures continuous access to laboratory resources and legal compliance.

---

### General Safety
**Safety training valid for 12 month and needs to be completed on [ILIAS](https://ilias.uni-freiburg.de/goto.php/crs/4019573)** before day one in the lab.

**Why this matters:**
General procedures are your first line of defence against accidents and protect the wider lab community.
Shared spaces stay safe and efficient only when everyone follows the same baseline rules.
Completing formal training ensures you understand expectations before touching equipment.
- [ ] Know the locations of emergency exits, extinguishers, and the first aid kit.  
- [ ] Do not work alone after hours; approved working hours: **09:00–17:30**.  
- [ ] Keep lab areas tidy; no food or drinks in lab rooms.  
- [ ] Report all incidents, spills, or unsafe conditions to your tutor immediately.  
- [ ] Read and sign all relevant safety instructions before your first experiment.  


(laser-safety-card)=
### Laser Safety
**Why this matters:**  
Lasers can cause permanent eye or skin injury and invisible hazards due to infrared or ultraviolet radiation.  
Following proper laser-safety rules protects you and everyone sharing the lab.  
Even low-power beams can be dangerous when misaligned or unmonitored.

- [ ] Eye protection worn when Class 3B or 4 lasers are active; correct wavelength range verified.  
- [ ] Beam paths clearly marked; no stray reflections toward eye level.  
- [ ] Optical tables free of unnecessary optics; unused beams dumped securely.  
- [ ] Shutters and interlocks tested before activation; never bypass safety circuits.  
- [ ] Reflective objects (watches, jewelry, tools) removed near active setups.  
- [ ] Power levels, filters, and alignment procedures logged in lab notes.  
- [ ] Never align a laser “by eye” — use cards, viewers, or low-power alignment beams.  


(radiation-safety-card)=
### Radiation Safety
**Why this matters:**  
Handling radioactive sources requires heightened awareness and adherence to legal protocols.  
Radiation protection safeguards not only you but all future users of the facility.  
Training and strict adherence to procedures are mandatory under German radiation law.

- [ ] Only trained and authorized persons may handle or move radioactive sources.  
- [ ] Dosimeter (if required) worn visibly and returned after the experiment.  
- [ ] Sources remain in shielded containers when not in use; log all transfers.  
- [ ] No food, drinks, or personal items in radiation areas.  
- [ ] Hands washed after any source handling.  
- [ ] Any loss, irregularity, or suspected contamination reported immediately to the tutor and safety officer.  

---

### Electrical & High-Voltage Safety
**Why this matters:**  
Most laboratory injuries come from avoidable electrical mistakes.  
Understanding current paths and isolation prevents shocks, damage, and downtime.  
Proper grounding and awareness keep both you and your setup safe.

- [ ] Check cables and connectors for damage before use.  
- [ ] Never touch a circuit when powered unless explicitly designed for low voltage.  
- [ ] Ground all measurement devices consistently; avoid ground loops.  
- [ ] Discharge capacitors before adjusting circuits.  
- [ ] Never override safety interlocks on HV supplies.  
- [ ] Verify correct polarity and limit settings before enabling output.  

---

### Vacuum and Cryogenic Safety
**Why this matters:**  
Vacuum and cryogenic systems involve implosion, asphyxiation, and frostbite hazards.  
These systems often store large energies or cold liquids invisible to the eye.  
Following procedures prevents accidents and protects sensitive instrumentation.

- [ ] Ensure all glass parts are shielded or rated for vacuum.  
- [ ] Vent systems slowly; avoid rapid pressure changes.  
- [ ] Do not expose cryogenic liquids to air (oxygen condensation risk).  
- [ ] Wear cryo gloves and face protection when handling cold components.  
- [ ] Check pump oil levels and trap conditions before use.  

---

### 🚨 Emergency Contacts

If you encounter an emergency or unsafe situation, act immediately — **do not hesitate to call for help**.

| **Type of Emergency** | **Contact / Number** | **Location / Notes** |
|------------------------|----------------------|----------------------|
| **Fire / Medical / Police** | **112** | EU-wide emergency number |
| **Organizer** | **0761 203 7645** | Always inform after any incident |
| **Building Address** | Gustav-Mie-Haus, Hermann-Herder-Str. 3, 79104 Freiburg | Institute of Physics |

**After any incident:**  
- Ensure personal safety first.  
- Inform your **tutor and organizers** as soon as possible.  
- Provide short written documentation of what happened — this is about learning and prevention, not blame.

---

### Confirmation & Documentation
- Completion of **Safety training** on **[ILIAS](https://ilias.uni-freiburg.de/goto.php/crs/4019573)** is mandatory for lab participation – valid for 12 months–only!  
- Tutors verify training completion before granting experiment access.  
- Record your training completion in your **lab notes** on day 1.  

---

## 2) Lab Notes – Minimal Template

**Why this matters:**  
A good lab notebook is your memory and your protection.  
It supports transparency, reproducibility, and intellectual honesty.  
Your report and grade depend on what is documented here.

- Header: **Title · Names · Date · Time**  
- **Setup sketch** with labels and serial numbers  
- **Parameter log** (voltages, gains, wavelengths, temperatures)  
- **Actions** in chronological order (what / why / result)  
- **Raw data** references (file names, timestamps, versions)  
- **Quick plots** with axis labels + units  
- **Issues & fixes** (what changed, when, who)  
- Sign at the end of each session; never delete entries, only annotate corrections  


(imrad-card)=
## 3) IMRaD – 1-Page Skeleton

**Why this matters:**  
Scientific structure helps you communicate findings efficiently.  
Following IMRaD trains you for professional documentation and peer review.  
Clarity is part of scientific quality.

- **Introduction (½ page):** aim, context, key references  
- **Methods (1–2 pages):** setup, model/formulas, calibration steps  
- **Results (2–3 pages):** plots with uncertainties, fit tables, residuals  
- **Discussion (1 page):** main finding vs aim, limits, systematics, improvements  
- **Appendix:** lab notes, code listings, extended data  

---

## 4) Plotting Standards

**Why this matters:**  
Plots are how physicists tell stories about data.  
Good figures reveal insight; bad ones hide it.  
Aim for reproducibility and readability at publication level.

- [ ] Axes titled with **quantity [unit]**  
- [ ] Uncertainty bars visible and defined  
- [ ] Consistent scale and tick spacing  
- [ ] Legend used only if necessary  
- [ ] Indicate number of samples and averaging  
- [ ] Residuals shown for all fits  
- [ ] Save figures as vector (PDF/SVG)  

---

## 5) Uncertainty – Fast Checklist

**Why this matters:**  
Quantifying uncertainty distinguishes science from anecdote.  
Understanding error sources builds confidence in results.  
A well-documented uncertainty analysis is a mark of scientific maturity.

- [ ] Identify **statistical** and **systematic** sources separately  
- [ ] Never use deviation from literature as a systematic estimate  
- [ ] Propagate via relevant formulas or resampling (bootstrap)  
- [ ] Include calibration uncertainties in final result  
- [ ] Comment on which source dominates and why  

---

## 6) Instrument Quick Checks

**Why this matters:**  
Most measurement issues are mechanical or electronic misconfigurations.  
Regular checks save you hours of troubleshooting.  
This is the habit of every professional experimentalist.

**Oscilloscope**
- [ ] Probe attenuation (1×/10×) and bandwidth correct  
- [ ] Ground connection secure; trigger stable  

**Function Generator**
- [ ] Output load (Hi-Z / 50 Ω) set correctly  
- [ ] Amplitude and offset double-checked  

**Laser/Optics**
- [ ] Power meter zeroed; ND filters logged  
- [ ] Beam height fixed; unused beams dumped safely  
- [ ] Alignment performed with low-power beam  

**Vacuum/Detectors**
- [ ] Bias polarity correct; dark current recorded  
- [ ] Connectors and feedthroughs clean and tight  


(troubleshooting-card)=
## 7) Troubleshooting – Common Paths

**Why this matters:**  
Finding problems systematically teaches experimental reasoning.  
Most “mysteries” are simple oversights.  
Think like an engineer before changing parameters.

- **No signal:** power, alignment, range, bias, lock status?  
- **Too noisy:** filters, grounding, light leaks, vibration?  
- **Fit fails:** wrong model, range, units, outliers?  
- **Drift:** warm-up time, temperature, or optical misalignment?  

---

## 8) Emergency Steps

**Why this matters:**  
Knowing what to do under stress can save lives and equipment.  
Safety training only helps if you recall it under pressure.  
Act quickly but never alone.

1. **Stop** the source (laser shutter, HV off, pump stop if safe)  
2. **Warn** others; clear the area  
3. **Call** emergency **112** (organizer: (0761) 203-7645)  
4. **Inform** tutor and organizer immediately  
5. **Document** the event in your lab notes afterward  

---

## 9) Submission Routing (Always)

**Why this matters:**  
Correct submission channels guarantee your work is graded and archived properly.  
This protects your results and the fairness of the course.  
Never email reports unless explicitly instructed.

- **Handbook:** general guidance, public resources  
- **ILIAS:** official schedules, safety/entrance quizzes, **uploads**, **grading**  

