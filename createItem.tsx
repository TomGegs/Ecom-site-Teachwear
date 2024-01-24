import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';
import { createItem } from './api/items';
import { Link, useNavigate } from 'react-router-dom';

export function CreateItem() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const costRef = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();

    const createItemMutation = useMutation({
        mutationFn: createItem, //mutation function passing in createItem
        onSuccess: (newItem) => {
            queryClient.setQueryData(['items', newItem.id], newItem); //update data in cache with item key
            navigate(`/items/${newItem.id}`); //once item is created, navigate to item page
        },
    });

    //create item mutation
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        createItemMutation.mutate({
            //mutate function
            name: nameRef.current!.value,
            cost: parseInt(costRef.current!.value),
        });
    }

    return (
        <div>
            {createItemMutation.isLoading ? 'Loading...' : 'Create'}
            <Link to="/">All Items</Link>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="item">Item Name</label>
                    <input id="item" ref={nameRef} />
                </div>
                <div>
                    <label htmlFor="cost">cost</label>
                    <input id="cost" ref={costRef} />
                </div>
                <button disabled={createItemMutation.isLoading}>
                    {createItemMutation.isLoading ? 'Loading...' : 'Create'}
                </button>
            </form>
        </div>
    );
}
