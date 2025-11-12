# Step 3 – Raman Measurements

In this step you will record **Raman spectra** of water and ethanol–water mixtures.  
The goal is to identify characteristic Raman peaks, study their intensity dependence on concentration, and ensure consistent measurement conditions across all samples.

---

## 🎯 Objective

- Record Raman spectra for different ethanol concentrations in water  
- Identify the **Raman peaks of ethanol** (C–H and O–H vibrations)  
- Compare to pure water and analyze changes in intensity and line shape  
- Prepare calibrated data for quantitative evaluation (Step 4)

---

## ⚙️ Equipment and Setup

| Device | Purpose |
|---------|----------|
| **532 nm DPSS laser (CPS532-C2)** | Excitation source (Raman scattering) |
| **Ocean Optics USB2000+** | Detection of scattered light |
| **Sample cuvette holder** | Holds liquids (water, ethanol–water mixtures) |
| **Optical fiber (90° collection)** | Collects scattered light, minimizes Rayleigh line |
| **Filters** | Optional notch or edge filters for laser suppression |
| **Ethanol / water mixtures** | e.g. 0 %, 20 %, 40 %, 60 %, 80 %, 100 % v/v |

---

## 🧪 Measurement Procedure

### 1. Preparation

- [ ] Ensure laser, interlock, and cooling system are active (see Step 1).  
- [ ] Verify spectrometer calibration from Step 2.  
- [ ] Check that the sample cuvette is clean and filled (~2 ml).  
- [ ] Label each sample clearly with its ethanol concentration.  

### 2. Measurement Parameters

Typical starting values (adjust as needed):

| Parameter | Typical Value | Note |
|------------|----------------|------|
| Integration time | 100 – 500 ms | Avoid saturation |
| Averages | 10 – 50 | Improve SNR |
| Laser power | 50 – 200 mW | Depending on sample brightness |
| Geometry | 90° scattering | Minimizes elastic background |
| Slit width | Fixed from Step 2 | Keep constant for all runs |

Record all values in your lab notebook.

### 3. Data Collection

1. Place the first sample (pure water) in the beam path.  
2. Record its Raman spectrum and save as `water.csv`.  
3. Repeat for ethanol–water mixtures of increasing concentration.  
4. Optionally, measure **pure ethanol** and **Ouzo** for comparison.  
5. Between each sample, rinse and dry the cuvette.  
6. Save all spectra with consistent filenames, e.g.: ethanol_0pct.csv; ethanol_20pct.csv; ethanol_40pct.csv; ...   
7. Store metadata (integration time, averages, laser power) in a separate `.txt` or `.json` file.

> 💡 *Tip:* Use identical acquisition settings for all samples so that relative intensities remain comparable.

---

## 🔬 Identifying Raman Peaks

Characteristic Raman bands for ethanol (λ₀ = 532 nm):

| Raman Shift (cm⁻¹) | Approx. λ (nm) | Mode / Assignment |
|---------------------|----------------|-------------------|
| ~880 | 540.6 | C–C stretch |
| ~1050 | 543.3 | C–O stretch |
| ~1450 | 548.6 | CH₂ deformation |
| ~2930 | 563.3 | C–H stretching |

Pure water exhibits a broad O–H band near 3200–3400 cm⁻¹.

> 📘 The position of peaks in wavelength can be converted to Raman shift via:  
> \[
> \Delta\tilde{\nu} = \left(\frac{1}{\lambda_0} - \frac{1}{\lambda_{\text{meas}}}\right) \times 10^7
> \]

---

## 💻 Data Analysis

### 💻 Open the interactive notebook (Binder):

[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/raman_spectra_analysis.ipynb)
👉 [Spectra Analysis Notebook](../02_Notebooks/raman_spectra_analysis.ipynb)
### 🔧 Helper Functions
Reusable functions for peak fitting, baseline subtraction, smoothing, and λ ↔ Raman shift conversion  
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/helper_peakfit_functions.ipynb)
👉 [Open helper_peakfit_functions.ipynb](../02_Notebooks/helper_peakfit_functions.ipynb)


These notebooks guides you through:

- Baseline correction and background subtraction  
- Conversion of wavelength → Raman shift (cm⁻¹)  
- Peak detection and Gaussian fitting  
- Extraction of intensity or area for characteristic peaks  
- Visualization of all spectra for comparison  

---

## ⚠️ Practical Notes

- **Avoid detector saturation.** Saturated peaks destroy linearity in intensity analysis.  
- Keep **ambient light minimal** — close room lights if possible.  
- If the **Rayleigh line** (532 nm) dominates the detector, use an **edge or notch filter**.  
- If no Raman peaks appear, check alignment and focus: small deviations strongly reduce signal.  
- Always save the **dark spectrum** for subtraction.

---

## 🧾 Documentation Guidelines

For each sample, record:

| Sample | Ethanol fraction (v/v %) | Integration time (ms) | Laser power (mW) | Peak @ 1050 cm⁻¹ (counts) | Notes |
|---------|--------------------------|------------------------|------------------|-----------------------------|-------|
| water | 0 | 300 | 100 | — | — |
| ethanol/water | 20 | 300 | 100 | 1850 | clear |
| ethanol/water | 40 | 300 | 100 | 3550 | — |
| ethanol/water | 60 | 300 | 100 | 5000 | strong |
| ethanol/water | 80 | 300 | 100 | 6450 | saturated |
| ethanol | 100 | 300 | 100 | 8100 | very strong |

Add comments on baseline shape, noise level, or anomalous features.

---

## ✅ Completion Checklist for Step 3

- [ ] Raman spectra recorded for all ethanol concentrations  
- [ ] Integration time, laser power, and averages kept constant  
- [ ] Background and dark spectra recorded  
- [ ] Spectra saved as CSV with consistent naming  
- [ ] Characteristic Raman peaks identified  
- [ ] Lab notebook updated with parameters and observations  

---

## 🧠 Reference Material

- [Theory of Raman Scattering](../03_Background/theory_raman_scattering.md)  
- [Error Analysis and Peak Fitting](../03_Background/error_analysis_and_fitting.md)  
- [USB2000+ Operating Manual](../06_Literature/Spektrometer_usb2000-operating-instructions1.pdf)

---

## 🔗 Next Step

➡ Proceed to [Step 4 – Quantitative Analysis](step4_quantitative_analysis.md)  
⬅ Return to [Step 2 – Spectrometer Calibration](step2_calibration.md)
