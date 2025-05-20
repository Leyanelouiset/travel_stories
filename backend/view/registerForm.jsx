import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './RegisterForm.css';

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch,
    reset
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setServerError('');
      
      // Appel à ton API
      const response = await axios.post('/api/register', {
        name: data.name,
        email: data.email,
        password: data.password
      });
      
      // Succès de l'inscription
      setRegisterSuccess(true);
      reset(); // Réinitialise le formulaire
      
    } catch (error) {
      console.error("Erreur d'inscription:", error);
      setServerError(error.response?.data?.message || "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="register-container">
      <h2>Inscription</h2>
      
     
      {registerSuccess && (
        <div className="success-message">
          Inscription réussie! Vous pouvez maintenant vous connecter.
        </div>
      )}
      
     
      {serverError && (
        <div className="error-message">
          {serverError}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
     
        <div className="form-group">
          <label>Nom:</label>
          <input
            type="text"
            className={errors.name ? "input-error" : ""}
            {...register("name", {
              required: "Le nom est obligatoire",
              minLength: {
                value: 2,
                message: "Le nom doit avoir au moins 2 caractères"
              }
            })}
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>
        
     
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className={errors.email ? "input-error" : ""}
            {...register("email", {
              required: "L'email est obligatoire",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "L'email n'est pas valide"
              }
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>
        
      
        <div className="form-group">
          <label>Mot de passe:</label>
          <input
            type="password"
            className={errors.password ? "input-error" : ""}
            {...register("password", {
              required: "Le mot de passe est obligatoire",
              minLength: {
                value: 8,
                message: "Le mot de passe doit avoir au moins 8 caractères"
              }
            })}
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
        </div>
        
        
        <div className="form-group">
          <label>Confirmer le mot de passe:</label>
          <input
            type="password"
            className={errors.confirmPassword ? "input-error" : ""}
            {...register("confirmPassword", {
              required: "Veuillez confirmer votre mot de passe",
              validate: (value) => {
                return value === watch('password') || "Les mots de passe ne correspondent pas";
              }
            })}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
        </div>
        
      
        <button 
          type="submit" 
          className="submit-button" 
          disabled={isLoading}
        >
          {isLoading ? "Chargement..." : "S'inscrire"}
        </button>
        
        
        <p className="login-link">
          Déjà inscrit? <a href="/login">Se connecter</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;