# Formik: Libreria di gestione di form in React

Formik semplifica la creazione e la gestione di form complessi in React grazie alla sua API pulita e ben documentata.

## Base

### `useFormik`

useFormik è un hook a cui passare gli `initialValues` e l'`onSubmit` del nostro form, e che ci ritorna un oggetto che contiene:

- `values`: lo state coi valori del form;

e alcuni helper methods tra cui:

- `handleSubmit`: si occupa della submission;
- `handleChange`: aggiorna i valori del form;
- `handleBlur`: esegue una funzione quando un campo viene visitato;

### Convalida

L'hook si occupa anche di convalidare i campi del form se gli passiamo una funzione `validate` che ritorna un oggetto `errors` che rispecchia la stessa struttura di `values`.

### Campi visitati

La funzione `validate` viene eseguita a ogni pressione di tasto per qualsiasi input del form, quindi l'utente riceverebbe errori su campi ancora non visitati. Per ovviare a questo `useFormik` restituisce anche un oggetto `touched` che traccia i campi visitati. Per utilizzarlo basta assegna il metodo `handleBlur` alla prop `onBlur` degli input che si vogliono tracciare e l'utente visualizzerà solo gli errori dell'input che sta visitando in quel momento.

### Yup

La convalida degli input può essere gestita anche da altre librerie come ad es. Yup che usa un oggetto `validationSchema` che genera errori per le chiavi contenute negli oggetti `values`/`initialValues`/`touched` in maniera più semplice.

## Avanzato

### `getFieldProps`

Al posto di collegare a mano le prop degli input, useFormik fornisce il metodo `getFieldProps` che restituisce le prop collegate automaticamente una volta spreadato all'interno dell'input.

### `<Formik />`

Possiamo risparmiare ancora più codice usando alcuni componenti che sfruttano un Context evitandoci di passare manualmente le prop.
`<Formik />` è un Provider che utilizza internamente useFormik passando ai children l'oggetto ritornato dall'hook. `<Form />`, ``
