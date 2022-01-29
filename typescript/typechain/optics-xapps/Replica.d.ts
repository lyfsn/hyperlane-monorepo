/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ReplicaInterface extends ethers.utils.Interface {
  functions: {
    "PROCESS_GAS()": FunctionFragment;
    "RESERVE_GAS()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "acceptableRoot(bytes32)": FunctionFragment;
    "confirmAt(bytes32)": FunctionFragment;
    "homeDomainHash()": FunctionFragment;
    "initialize(uint32,address,bytes32,uint256,uint256)": FunctionFragment;
    "latestUpdateIndex()": FunctionFragment;
    "localDomain()": FunctionFragment;
    "messages(bytes32)": FunctionFragment;
    "optimisticSeconds()": FunctionFragment;
    "owner()": FunctionFragment;
    "process(bytes)": FunctionFragment;
    "prove(bytes32,bytes32[32],uint256)": FunctionFragment;
    "proveAndProcess(bytes,bytes32[32],uint256)": FunctionFragment;
    "remoteDomain()": FunctionFragment;
    "setUpdater(address)": FunctionFragment;
    "state()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "update(bytes32,uint256,bytes)": FunctionFragment;
    "updater()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "PROCESS_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RESERVE_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptableRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAt",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "homeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestUpdateIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "messages", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "optimisticSeconds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "process", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "prove",
    values: [
      BytesLike,
      [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proveAndProcess",
    values: [
      BytesLike,
      [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "remoteDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setUpdater", values: [string]): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "PROCESS_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RESERVE_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptableRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "confirmAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "homeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestUpdateIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messages", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "optimisticSeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proveAndProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remoteDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUpdater", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;

  events: {
    "NewUpdater(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Process(bytes32,bool,bytes)": EventFragment;
    "Update(uint32,bytes32,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewUpdater"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Process"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
}

export class Replica extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ReplicaInterface;

  functions: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[number]>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    homeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _updateRoot: BytesLike,
      _updateIndex: BigNumberish,
      _optimisticSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    latestUpdateIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    optimisticSeconds(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    process(
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remoteDomain(overrides?: CallOverrides): Promise<[number]>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update(
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updater(overrides?: CallOverrides): Promise<[string]>;
  };

  PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<number>;

  acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  homeDomainHash(overrides?: CallOverrides): Promise<string>;

  initialize(
    _remoteDomain: BigNumberish,
    _updater: string,
    _updateRoot: BytesLike,
    _updateIndex: BigNumberish,
    _optimisticSeconds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  latestUpdateIndex(overrides?: CallOverrides): Promise<BigNumber>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  messages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

  optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  process(
    _message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  prove(
    _leaf: BytesLike,
    _proof: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ],
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proveAndProcess(
    _message: BytesLike,
    _proof: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ],
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remoteDomain(overrides?: CallOverrides): Promise<number>;

  setUpdater(
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update(
    _root: BytesLike,
    _index: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updater(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<number>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<string>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _updateRoot: BytesLike,
      _updateIndex: BigNumberish,
      _optimisticSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    latestUpdateIndex(overrides?: CallOverrides): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    process(_message: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remoteDomain(overrides?: CallOverrides): Promise<number>;

    setUpdater(_updater: string, overrides?: CallOverrides): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updater(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    NewUpdater(updater?: null): TypedEventFilter<[string], { updater: string }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Process(
      messageHash?: BytesLike | null,
      success?: boolean | null,
      returnData?: BytesLike | null
    ): TypedEventFilter<
      [string, boolean, string],
      { messageHash: string; success: boolean; returnData: string }
    >;

    Update(
      homeDomain?: BigNumberish | null,
      root?: BytesLike | null,
      index?: BigNumberish | null,
      signature?: null
    ): TypedEventFilter<
      [number, string, BigNumber, string],
      { homeDomain: number; root: string; index: BigNumber; signature: string }
    >;
  };

  estimateGas: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _updateRoot: BytesLike,
      _updateIndex: BigNumberish,
      _optimisticSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    latestUpdateIndex(overrides?: CallOverrides): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    process(
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remoteDomain(overrides?: CallOverrides): Promise<BigNumber>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update(
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updater(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    confirmAt(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _updateRoot: BytesLike,
      _updateIndex: BigNumberish,
      _optimisticSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    latestUpdateIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    optimisticSeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    process(
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remoteDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update(
      _root: BytesLike,
      _index: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
