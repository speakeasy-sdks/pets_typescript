/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Category } from "./category";
import { Tag } from "./tag";
import { Expose, Type } from "class-transformer";

/**
 * pet status in the store
 */
export enum PetStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

/**
 * Pet object that needs to be added to the store
 */
export class Pet extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    @Type(() => Category)
    category?: Category;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "photoUrls" })
    photoUrls: string[];

    /**
     * pet status in the store
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: PetStatus;

    @SpeakeasyMetadata({ elemType: Tag })
    @Expose({ name: "tags" })
    @Type(() => Tag)
    tags?: Tag[];
}
