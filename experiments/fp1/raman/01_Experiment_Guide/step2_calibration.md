# Step 2 – Spectrometer Calibration (Na / Hg Lamps)

In this step you will **calibrate the USB2000+ spectrometer** using the discrete spectral lines of sodium (Na) and mercury (Hg) lamps.  
A precise calibration is essential for later conversion of pixel numbers to wavelengths and Raman shifts.

---

## 🎯 Objective

Establish a calibration function  
λ(p) = a₀ + a₁·p + a₂·p² + …
that converts **detector pixel number (p)** into **wavelength λ (in nm)** with minimal residual error.

---

## ⚙️ Equipment

| Device | Purpose / Notes |
|---------|----------------|
| **Na spectral lamp** | Strong yellow doublet around 589.0–589.6 nm |
| **Hg spectral lamp** | Rich line spectrum (404.7, 435.8, 546.1, 577.0, 579.1 nm) |
| **Ocean Optics USB2000+** | 2048-pixel CCD array, connected via USB and controlled with OceanView |
| **Fiber coupling** | Collects lamp emission and directs it to the spectrometer |
| **Halogen lamp / LED** | Optional white-light source for continuous reference spectrum |

---

## 🧩 Calibration Procedure

### 1. Warm-Up and Setup
- [ ] Turn on the **Na and Hg lamps** (allow ≈ 5–10 min warm-up).  
- [ ] Verify that the fiber input is aligned and receiving sufficient signal.  
- [ ] Set integration time to avoid saturation (≈ 10–50 ms typical).  
- [ ] Record one **dark spectrum** with both lamps off for background subtraction.

### 2. Record Spectra
1. Record the **Hg lamp spectrum**. Save as `Hg_reference.csv`.  
2. Record the **Na lamp spectrum**. Save as `Na_reference.csv`.  
3. (Optional) Record the **white-light source** to verify grating coverage.  
4. Export all data as **CSV** (columns: wavelength [nm], intensity [counts]).

### 3. Identify Reference Lines
Use the following well-known emission lines as calibration points:

| Lamp | Wavelength (nm) | Transition | Comment |
|------|------------------|------------|----------|
| Hg | 404.656 | violet | Strong, narrow line |
| Hg | 435.833 | blue | Good for mid-range fit |
| Hg | 546.074 | green | High intensity |
| Hg | 577.045 | yellow | May overlap with 579 nm |
| Hg | 579.066 | yellow | Often blended |
| Na | 589.0 / 589.6 | yellow doublet | Excellent for high-λ reference |

---

## 🧮 Data Analysis

Once the spectral lines are identified, determine the **pixel position** of each peak (using OceanView or Python).  
Then fit a polynomial to map pixel → wavelength.
  
### 💻 Open the interactive notebook (Binder):
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/lucaseisenhart/advanced-lab/main?labpath=experiments/fp1/raman/02_Notebooks/calibration_hg_na.ipynb)


This notebook guides you through:
- Gaussian fitting of individual emission peaks  
- Polynomial fitting (λ = a₀ + a₁p + a₂p²)  
- Visualization of residuals  
- Propagation of calibration uncertainty  

> 📘 The USB2000+ grating dispersion is slightly **non-linear**.  
> Avoid assuming a purely linear calibration and discuss the remaining residuals quantitatively.

---

## ⚠️ Practical Tips

- Use **narrow slit widths** or reduced integration times to avoid overlapping peaks.  
- Verify that the **same spectrometer settings** (integration time, gain, averaging) are used for all future Raman spectra.  
- If your data appear shifted, check whether OceanView applied an **internal calibration** — use only raw data if possible.  
- The **Hg and Na lines** should cover the wavelength range you will later use (e.g., 530–650 nm for 532 nm excitation).

---

## 🧾 Example Fit Evaluation

After fitting, document the following results in your lab notebook:

| Parameter | Symbol | Example Value |
|------------|---------|----------------|
| Polynomial coefficients | a₀, a₁, a₂ | 400.12, 0.252, −1.1×10⁻⁵ |
| RMS residual | σ_fit | 0.08 nm |
| Number of lines used | N | 6 |
| Wavelength range | – | 400–600 nm |

Attach a residual plot (λ_ref − λ_fit) and discuss whether higher-order terms are justified.

---

## ✅ Calibration Checklist

- [ ] Hg and Na lamp spectra recorded and saved as CSV  
- [ ] Emission peaks correctly identified and labeled  
- [ ] Polynomial calibration fitted  
- [ ] Residuals evaluated and uncertainties determined  
- [ ] Calibration coefficients and errors documented in lab notebook  
- [ ] OceanView calibration disabled (raw mode)  

---

## 🧠 Theoretical References

- [Raman and Rayleigh Scattering – Theory](../03_Background/theory_raman_scattering.md)  
- [Spectrometer Design and Grating Dispersion](../03_Background/instrumentation_spectrometer_pmt.md)  
- [Error Propagation in Polynomial Fits](../03_Background/error_analysis_and_fitting.md)

---

## 🔗 Next Step

➡ Proceed to [Step 3 – Raman Measurements](step3_raman_measurement.md)  
⬅ Return to [Step 1 – Setup and Safety](step1_setup_and_safety.md)
