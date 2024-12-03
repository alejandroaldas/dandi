import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '@/utils/supabase';
import { v4 as uuidv4 } from 'uuid';

export function useApiKeys() {
  const [apiKeys, setApiKeys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiKeys = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApiKeys(data);
    } catch (error) {
      toast.error('Failed to fetch API keys');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createApiKey = async ({ name, monthlyLimit }) => {
    if (!name.trim()) {
      toast.error('Please enter a key name');
      return null;
    }

    setIsLoading(true);
    try {
      const newKey = {
        name: name,
        key: `key_${uuidv4()}`,
        monthly_limit: monthlyLimit || null,
        status: 'active'
      };

      const { data, error } = await supabase
        .from('api_keys')
        .insert([newKey])
        .select()
        .single();

      if (error) throw error;

      setApiKeys([data, ...apiKeys]);
      toast.success('API key created successfully');
      return data;
    } catch (error) {
      toast.error('Failed to create API key');
      console.error('Error:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteApiKey = async (id) => {
    if (!confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      return false;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('api_keys')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setApiKeys(apiKeys.filter(key => key.id !== id));
      toast.success('API key deleted successfully');
      return true;
    } catch (error) {
      toast.error('Failed to delete API key');
      console.error('Error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateApiKey = async (id, updates) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('api_keys')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setApiKeys(apiKeys.map(key => 
        key.id === id ? data : key
      ));
      toast.success('API key updated successfully');
      return true;
    } catch (error) {
      toast.error('Failed to update API key');
      console.error('Error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    apiKeys,
    isLoading,
    fetchApiKeys,
    createApiKey,
    deleteApiKey,
    updateApiKey
  };
} 