# Optional Tasks – Advanced Investigations

These exercises are designed for students who wish to explore **extensions of the Raman experiment**.  
They can be performed if time allows or as part of follow-up research projects.

---

## 🔬 1. Temperature Dependence of the Green Laser (Laser Pointer)

### Objective
Investigate how the **emission wavelength of the 532 nm DPSS laser** changes with temperature.

### Method
1. Place the laser in a controlled environment (e.g., near heating plate or cooling airflow).  
2. Record its output spectrum using the USB2000+ every 2 °C between 15 °C – 35 °C.  
3. Fit the emission peak and extract the wavelength shift.

### Expected Result
A red-shift of ~0.01–0.03 nm/°C due to changes in the nonlinear crystal’s phase matching.

### Reference
- [CPS532-C2 Datasheet](../06_Literature/Diodenlasermodul_CPS532-C2.pdf)

---

## 🧠 2. Comparison with the Iodine (Jod) Spectroscopy Experiment

### Objective
Correlate Raman spectral calibration with **Iodine absorption lines**.

### Method
1. Compare your Hg/Na calibration (Step 2) with the reference lines used in the Jod experiment.  
2. Discuss similarities in optical alignment, dispersion, and grating calibration.

### Discussion Points
- How does the Raman shift relate to absolute wavelength calibration?  
- What are the benefits of using emission vs. absorption lines?

---

## 📈 3. Spectrometer Resolution and Linewidth

### Objective
Quantify the **instrumental resolution** of the USB2000+.

### Method
1. Record a single, narrow spectral line from the Hg lamp (e.g., 546.1 nm).  
2. Fit it with a Gaussian and determine the full width at half maximum (FWHM).  
3. Convert to cm⁻¹ at 532 nm to estimate your minimal resolvable Raman shift.

### Expected Result
Resolution Δλ ≈ 0.4–0.6 nm → ≈ 15–20 cm⁻¹.

---

## 🧲 4. Polarization and Depolarization Ratio (Advanced)

### Objective
Measure the **polarization dependence** of Raman scattering for ethanol.

### Method
1. Place a **polarizer (analyzer)** in the detection path.  
2. Record spectra with analyzer parallel and perpendicular to the laser polarization.  
3. Compute depolarization ratio   
   $\rho = \frac{I_\perp}{I_\parallel}$  
   and relate it to molecular symmetry.

### Resources
💻 Open the interactive notebook (Binder):
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/depolarization_ratio.ipynb)
👉 [Polarization Notebook](../02_Notebooks/depolarization_ratio.ipynb)

Reusable functions for peak fitting, baseline subtraction, smoothing, and λ ↔ Raman shift conversion  
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/adv-labs-ufr/handbook/main?labpath=experiments/fp1/raman/02_Notebooks/helper_peakfit_functions.ipynb)
👉 [Open helper_peakfit_functions.ipynb](../02_Notebooks/helper_peakfit_functions.ipynb)

👉 [Theory of Raman Scattering](../03_Background/theory_raman_scattering.md)

---

## 💡 5. White-Light vs. Laser Excitation

### Objective
Compare the **spectral output** of LED and halogen sources with the monochromatic laser.

### Method
1. Record spectra of each light source using the same integration settings.  
2. Plot and compare their spectral power distributions.  
3. Discuss why Raman scattering requires coherent monochromatic excitation.

### References
- [LED_LIUCWHA Specification](../06_Literature/LED_LIUCWHA-SpecSheet.pdf)  
- [Halogen Source Datasheet](../06_Literature/LED_LIU-PS-SpecSheet.pdf)

---

## 📘 Documentation

For any optional measurement you perform, include in your lab notebook:

| Parameter | Description |
|------------|--------------|
| Measurement title | e.g. “Temperature Drift of Laser Wavelength” |
| Objective | One-line purpose |
| Setup sketch | Schematic with parameters |
| Raw data | Filename(s) |
| Results | Key numerical outcomes |
| Discussion | Short interpretation (max. 5 sentences) |

---

## ✅ Optional Module Checklist

- [ ] One optional experiment completed (minimum)  
- [ ] Data saved in `05_Data/optional/`  
- [ ] Analysis documented in Python or OceanView  
- [ ] Results discussed in final report  

---

⬅ Return to [Experiment Guide Index](index.md)  

```{raw} html
<style>
/* Nur auf dieser Seite (per data-page-Attribut) */
body[data-page="experiments/fp1/raman/01_Experiment_Guide/optional_tasks"] .bd-article-nav {
  display: none !important;
}
</style>
```
